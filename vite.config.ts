import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/neuromind1/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

**Шаг 2 — Создайте файл workflow**
В репозитории нажмите **Add file → Create new file** → в поле имени файла введите точно:
```
.github/workflows/deploy.yml
