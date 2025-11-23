import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChefHat, LogOut, Clock, Users, Calendar } from 'lucide-react';
import Logo from '../imports/Logo1';
import { DocViewerDialog } from './DocViewerDialog';
import { useState } from 'react';

export function Dashboard({ user, recipes, onLogout, onSelectRecipe, onAddRecipe, onStartNewRecipe }) {
  const [openNewRecipe, setOpenNewRecipe] = useState(false); // retained for backward compatibility (not used now)
  const [docToView, setDocToView] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 flex-shrink-0">
                <Logo />
              </div>
              <div>
                <h1 className="text-3xl">FOODEX - Taller Gastronómico</h1>
                <p className="text-xl text-slate-300">Semestre 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-lg text-slate-300">Bienvenido/a</p>
                <p className="text-2xl mb-2">{user.name}</p>
                <Badge variant={user.role === 'profesor' ? 'default' : 'secondary'} className="text-lg px-4 py-1">
                  {user.role === 'profesor' ? 'Profesor' : 'Alumno'}
                </Badge>
              </div>
              <Button variant="destructive" onClick={onLogout} size="lg" className="p-6 text-lg">
                <LogOut className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto max-w-6xl p-8">
        <div className="grid grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-5">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <ChefHat className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-slate-600 mb-1">Recetas del Semestre</p>
                  <p className="text-4xl">{recipes.length}/10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-5">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-600 mb-1">Tiempo Promedio</p>
                  <p className="text-4xl">
                    {Math.round(recipes.reduce((sum, r) => sum + r.tiempo, 0) / recipes.length)} min
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-xl">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-600 mb-1">Rol Actual</p>
                  <p className="text-4xl">{user.role === 'profesor' ? 'Docente' : 'Estudiante'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recipe List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl text-slate-900">Recetas del Taller</h2>
            {user.role === 'profesor' && (
              <Button size="lg" className="text-xl px-8 py-6" onClick={onStartNewRecipe}>+ Nueva Receta</Button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {recipes.map((recipe) => (
              <Card 
                key={recipe.id}
                className="hover:shadow-xl transition-shadow cursor-pointer border-2"
                onClick={() => onSelectRecipe(recipe.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-2xl line-clamp-2 leading-tight">{recipe.nombre}</CardTitle>
                    <Badge variant="outline" className="text-base px-3 py-1">{recipe.codigo}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-lg text-slate-600 line-clamp-2 leading-relaxed">{recipe.argumentacionComercial}</p>
                  
                  <div className="flex items-center gap-6 text-base text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg">{recipe.tiempo} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="text-lg">{recipe.porcion} porción</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-base px-3 py-1">{recipe.categoria}</Badge>
                    {recipe.tecnicasBase.slice(0, 2).map((tecnica, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm px-2 py-1">
                        {tecnica}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full text-xl py-6 mt-4">Ver Ficha Técnica</Button>
                </CardContent>
              </Card>
            ))}

            {/* Empty slots */}
            {Array.from({ length: 10 - recipes.length }).map((_, idx) => (
              <Card key={`empty-${idx}`} className="border-dashed border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-400">Receta Pendiente</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-16">
                  <div className="text-center text-slate-400">
                    <Calendar className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-xl">Disponible próximamente</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
        {/* Modal de receta rápida deshabilitado tras migrar a página completa */}
        <DocViewerDialog
          doc={docToView}
          onClose={() => setDocToView(null)}
        />
    </div>
  );
}
