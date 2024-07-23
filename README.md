# incremental-search-app

Next.jsのApp RouterとSpotify Web APIを使用して、楽曲の逐次検索の機能を実装しました。

## Requirement

- Node.js
- yarn
- Spotify for Developer

## Getting Started

### Project

1. Nodeパッケージをインストールをします。

```shell
yarn install
```

yranがインストールされていない場合は、以下のコマンドでインストールしてください。

```shell
npm install -g yarn
```

※ Node.jsのバージョンは特に指定していませんが、LTSバージョンの使用をおすすめします。

### Spotify for Developer

1. Spotify for Developerにアクセスしログインをします。その後、アプリケーションを登録して、クライアントIDとクライアントシークレットを取得してください。

> [Spotify for Developer](https://developer.spotify.com/)

2. `.env.local`ファイルを作成し、以下の内容を記述してください。

```shell
cp .env.local.example .env.local
```

```dotenv:.env.local
SPOTIFY_CLIENT_ID={your_client_id}
SPOTIFY_CLIENT_SECRET={your_client_secret}
```

## Usage

### for Development

```shell
yarn dev
```

### for Production

```shell
yarn build

yarn start
```

## License

Copyright (c) 2024 Masashi Hamaguchi<br/>
Released under the MIT license<br/>
https://opensource.org/licenses/mit-license.php
