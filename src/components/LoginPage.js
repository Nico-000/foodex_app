import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { User, GraduationCap } from 'lucide-react';
import Logo from '../imports/Logo1';

export function LoginPage({ onLogin }) {
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedRole) {
      onLogin({ name, role: selectedRole });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="mx-auto w-32 h-32">
            <Logo />
          </div>
          <CardTitle className="text-4xl">FOODEX - Taller Gastronómico</CardTitle>
          <CardDescription className="text-xl">
            El sabor de siempre, en formato digital
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-xl">Nombre</label>
              <Input
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-2xl py-8 px-6"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xl">Selecciona tu rol</label>
              <div className="grid grid-cols-2 gap-6">
                <button
                  type="button"
                  onClick={() => setSelectedRole('alumno')}
                  className={`p-8 rounded-xl border-4 transition-all ${
                    selectedRole === 'alumno'
                      ? 'border-primary bg-primary/10'
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <GraduationCap className="w-16 h-16 mx-auto mb-3 text-primary" />
                  <p className="text-2xl text-center">Alumno</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedRole('profesor')}
                  className={`p-8 rounded-xl border-4 transition-all ${
                    selectedRole === 'profesor'
                      ? 'border-primary bg-primary/10'
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <User className="w-16 h-16 mx-auto mb-3 text-primary" />
                  <p className="text-2xl text-center">Profesor</p>
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full py-8 text-2xl"
              disabled={!name || !selectedRole}
            >
              Ingresar al Taller
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
