const files = ['grok-1.txt','grok-2.txt','grok-3.txt','grok-4.txt','grok-5.txt','grok-6.txt'];
const texts = await Promise.all(files.map(f => fetch(new URL(f, import.meta.url)).then(r => { if (!r.ok) throw new Error(f); return r.text(); })));
const s = document.createElement('script');
s.type = 'module';
s.textContent = texts.join('');
document.head.appendChild(s);
