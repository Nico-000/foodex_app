import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

export function DocViewerDialog({ doc, onClose }) {
  const open = !!doc;
  const name = doc?.name ?? '';
  const url = doc?.url ?? '';

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Documento adjunto</DialogTitle>
          <DialogDescription>
            {name || 'Archivo Word adjunto'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <p className="text-sm text-slate-600">
            La previsualización de archivos .doc/.docx no siempre es compatible en el navegador. Puedes descargar el archivo y abrirlo en Word.
          </p>
          {url && (
            <div className="flex gap-3">
              <a href={url} download={name || 'receta.docx'}>
                <Button>Descargar Word</Button>
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <Button variant="outline">Abrir en nueva pestaña</Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
