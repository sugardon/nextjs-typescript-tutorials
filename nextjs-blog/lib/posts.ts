import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostData {
  id: string;
  date: string;
  title: string;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const pd: PostData = {
      id: id,
      date: matterResult.data.date,
      title: matterResult.data.title,
    };
    return pd;
  });
  // Sort posts by date
  const sortedAllPostsData = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedAllPostsData;
}

export interface PostId {
  params: {
    id: string;
  };
}

export const getAllPostsIds = (): PostId[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const allPostId: PostId[] = fileNames.map((fileName) => {
    const pi: PostId = {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
    return pi;
  });

  return allPostId;
};

export const getPostData = (id: string): PostData => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    id,
    date: matterResult.data.date,
    title: matterResult.data.title,
  };
};
