import { Calendar } from "@/components/ui/calendar"

import './App.css'
import { useState } from "react"

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="w-full px-8">
      <div className="flex gap-x-2">
        <div className="flex-1 h-[650px] w-full bg-blue-200">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="h-full w-full flex"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              row: "w-full mt-2",
            }}
          />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

export { App }
