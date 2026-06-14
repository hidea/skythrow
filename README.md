Bluesky投稿専用クライアントアプリSkyThrowの紹介サイト。

## 新規リリース時の更新

新規リリース時は、基本的に `_help/release-notes.markdown` の先頭へ新しいリリース情報を追記する。

```markdown
- 2026.5.20 ver.1.5.4
  - English release note

  - 日本語のリリースノート
```

このファイルの先頭にある `- YYYY.M.D ver.x.y.z` が最新版として扱われ、トップページ、更新履歴ページ、インストールページの最新版表示へ反映される。

`_help/install.markdown` は `{{ latest_version }}` を使って最新版に置換されるため、通常は手動でバージョン番号を更新しなくてよい。

以前使っていた `src/data/releases.json` と `src/components/ReleaseList.astro` は、現行ページから参照されていなかったため削除済み。
