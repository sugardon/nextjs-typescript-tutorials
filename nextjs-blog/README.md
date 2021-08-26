This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Run Local

**Temporay run `yarn build` after `yarn install`**

see package.json, postinstall

<https://github.com/paketo-buildpacks/nodejs/blob/main/rfcs/0004-npm-scripts.md>

### yarn

```shell
$ yarn dev
```

http://localhost:3000

### docker

<https://buildpacks.io/docs/>

```shell
$ pack build nextjs-blog-image --buildpack=gcr.io/paketo-buildpacks/nodejs:0.3.0 --builder=gcr.io/paketo-buildpacks/builder:0.1.108-base
```

```shell
$ docker run --interactive --tty --publish 8080:8080 nextjs-blog-image
```

http://localhost:8080

#### build pack doc

- <https://github.com/paketo-buildpacks/base-builder>
- <https://github.com/paketo-buildpacks/samples>
- <https://paketo.io/docs/buildpacks/language-family-buildpacks/nodejs/>

### skaffold

```shell
$ skaffold dev -p local --port-forward
```

http://localhost:8080

tmp
