import {resolve} from 'path';
import { defineConfig } from 'vite'; 


export default defineConfig({
    build: {
        rollupOptions : {
            input : {
                main : './index.html',
                contato : './pages/contato.html',
                menu : './pages/menu.html',
                promo : './pages/promo.html',
                sobre : './pages/sobre.html'
            }
        }
    },
    outDir : 'dist'
})
