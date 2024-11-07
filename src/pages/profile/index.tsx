import { Grid3x3, LogOut, SquarePen } from 'lucide-react'

import { Button } from '@/components/button'

export function Profile() {
  return (
    <div className="w-full px-16 py-8 space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-zinc-400 size-28 rounded-full border-4 border-green-700" />

        <div>
          <h1 className="text-zinc-200 font-medium">Lineker Peron</h1>
          <p className="text-zinc-400 text-sm">RA000109951092</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button>
          <SquarePen className="size-4" />
          Editar perfil
        </Button>

        <Button>
          <LogOut className="size-4" />
          sair
        </Button>

        <Button>Configurações</Button>
      </div>

      <div className="space-y-1">
        <button className="text-xs text-zinc-400 flex gap-1 items-center rounded-md p-2 transition-colors hover:bg-zinc-700">
          <Grid3x3 className="size-3" />
          PUBLICAÇÕES
        </button>
        <div className="border-t border-zinc-700 w-full"></div>
      </div>
    </div>
  )
}
