# master-styles-samples

[Master Styles][master] のサンプル

## 環境構築

```bash
asdf plugin-add nodejs \
  ; asdf plugin-add python \
  ; asdf plugin-add yarn
```

```bash
asdf install
```

```bash
npm install \
    && pip install --requirement requirements.txt
```

## Lint

- 手動で試す

  ```bash
  pre-commit run --all-files
  ```

- コミット時自動実行

  ```bash
  pre-commit install
  ```

[master]: https://styles.master.co/
