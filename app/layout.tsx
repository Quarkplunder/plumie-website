import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import './globals.css';
export const metadata: Metadata = { title: 'plumie — Dein Abend. Deine Ruhe.', description: 'Entdecke dein persönliches Abendritual. Melatonin + Botanicals in drei Darreichungsformen. Der plumie Design-Prototyp.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="de"><body>{children}</body></html>; }
