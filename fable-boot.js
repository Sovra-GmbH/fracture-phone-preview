const files = ['fable-1.txt','fable-2.txt','fable-3.txt','fable-4.txt','fable-5.txt','fable-6.txt','fable-7.txt','fable-8.txt','fable-9.txt','fable-10.txt'];
const texts = await Promise.all(files.map(f => fetch(new URL(f, import.meta.url)).then(r => { if (!r.ok) throw new Error(f); return r.text(); })));
const s = document.createElement('script');
s.type = 'module';
s.textContent = texts.join('');
document.head.appendChild(s);
