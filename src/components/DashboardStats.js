import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function DashboardStats({ recipes, user }) {
  const totalRecipes = recipes.length;
  const promedioTiempo = recipes.length
    ? Math.round(
        recipes.reduce((acc, r) => acc + (r.tiempoPreparacion || 0), 0) / recipes.length
      )
    : 0;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6 bg-slate-800/40 text-white border-slate-700">
        <h3 className="text-xl font-semibold mb-2">Recetas del Semestre</h3>
        <p className="text-4xl font-bold">{totalRecipes}</p>
      </Card>
      <Card className="p-6 bg-slate-800/40 text-white border-slate-700">
        <h3 className="text-xl font-semibold mb-2">Tiempo Promedio</h3>
        <p className="text-4xl font-bold">{promedioTiempo} min</p>
      </Card>
      <Card className="p-6 bg-slate-800/40 text-white border-slate-700 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">Rol Actual</h3>
        <div className="mt-auto">
          <Badge variant={user.role === 'profesor' ? 'default' : 'secondary'} className="text-lg px-4 py-2">
            {user.role === 'profesor' ? 'Profesor' : 'Alumno'}
          </Badge>
        </div>
      </Card>
    </div>
  );
}
