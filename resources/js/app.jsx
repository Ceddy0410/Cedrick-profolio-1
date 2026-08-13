import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('./pages/**/*.jsx');

createInertiaApp({
    title: (title) => (title ? `${title} | Cedrick Opina` : 'Cedrick Opina | Developer & QA Specialist'),
    resolve: (name) => pages[`./pages/${name}.jsx`](),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#8eb69b',
        showSpinner: false,
    },
});
