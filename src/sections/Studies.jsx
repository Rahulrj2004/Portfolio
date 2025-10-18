import { Timeline } from "../Components/Timeline"
import { experiences } from "../constants"

const Studies = () => {
  return (
    <div className=" w-full">
      <Timeline data={experiences} />
    </div>
  )
}

export default Studies 