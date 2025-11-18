import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Bell, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function UtensilsNotification({ 
  isOpen, 
  onClose, 
  utensilios, 
  recipeName,
  userName 
}) {
  const [selectedUtensilios, setSelectedUtensilios] = useState([]);

  const handleToggleUtensilio = (utensilio) => {
    setSelectedUtensilios(prev => 
      prev.includes(utensilio) 
        ? prev.filter(u => u !== utensilio)
        : [...prev, utensilio]
    );
  };

  const handleSelectAll = () => {
    if (selectedUtensilios.length === utensilios.length) {
      setSelectedUtensilios([]);
    } else {
      setSelectedUtensilios([...utensilios]);
    }
  };

  const handleSendRequest = () => {
    if (selectedUtensilios.length === 0) {
      toast.error('Selecciona al menos un utensilio');
      return;
    }

    // Simular envío de notificación
    toast.success(
      `Solicitud enviada: ${selectedUtensilios.length} utensilio(s) para ${recipeName}`,
      {
        description: `Solicitado por: ${userName}`,
        duration: 5000,
      }
    );

    setSelectedUtensilios([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-3xl flex items-center gap-3">
            <Bell className="w-8 h-8 text-orange-600" />
            Solicitar Utensilios
          </DialogTitle>
          <DialogDescription className="text-xl pt-2">
            Selecciona los utensilios que necesitas para: <strong>{recipeName}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex items-center justify-between bg-slate-100 p-4 rounded-lg">
            <p className="text-lg text-slate-700">
              <strong>{selectedUtensilios.length}</strong> de <strong>{utensilios.length}</strong> seleccionados
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleSelectAll}
              className="text-lg px-6 py-5"
            >
              {selectedUtensilios.length === utensilios.length ? 'Deseleccionar todo' : 'Seleccionar todo'}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {utensilios.map((utensilio, idx) => {
              const isSelected = selectedUtensilios.includes(utensilio);
              return (
                <div
                  key={idx}
                  onClick={() => handleToggleUtensilio(utensilio)}
                  className={`p-6 rounded-xl border-4 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary/10' 
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Checkbox 
                      checked={isSelected}
                      onCheckedChange={() => handleToggleUtensilio(utensilio)}
                      className="w-6 h-6"
                    />
                    <span className="flex-1 text-lg leading-relaxed">{utensilio}</span>
                    {isSelected && (
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <p className="text-lg text-blue-900 leading-relaxed">
              <strong>Nota:</strong> La solicitud será enviada al profesor/encargado del taller. 
              Asegúrate de solicitar los utensilios con anticipación.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              size="lg"
              className="flex-1 text-xl py-6"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSendRequest}
              size="lg"
              className="flex-1 text-xl py-6"
              disabled={selectedUtensilios.length === 0}
            >
              <Bell className="w-6 h-6 mr-2" />
              Enviar Solicitud ({selectedUtensilios.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
