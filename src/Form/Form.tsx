import useDBHook from '@/hooks/useDBHook'
import { constants } from 'fs'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/navigation'

type CardType = {
  data: any
  DeleteTicket: (ticketId: string) => void
}

function formatDate(date: any) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}

function Form() {
    const router = useRouter()
  const { addTicket } = useDBHook()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [flightNumber, setFlightNumber] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [startDate, setStartDate] = useState<any>(new Date())

  const SubmitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    if(loading) return

    if (destination === '' || flightNumber === '' || name === '') {
      setError('Fill all fields')
      return
    }

    const uniqueId = uuidv4()

    setLoading(true)

    const res:any = await addTicket(
      uniqueId,
      destination,
      flightNumber,
      name,
      formatDate(startDate),
    )
    
    if(res.data){
        // window.location.reload();
    }
    else{
        setError(res.error.message)
        setLoading(false)
    }

    console.log(res)
  }

  useEffect(() => {
    setError('')
  }, [destination, flightNumber, name])

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box FormEl">
          <h3 className="text-lg font-bold">Enter Ticket Data</h3>
          <input
            value={destination}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDestination(e.target.value)
            }
            type="text"
            placeholder="Destination place"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            value={flightNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFlightNumber(e.target.value)
            }
            type="text"
            placeholder="Flight Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />

          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          />
          <button className="btn" onClick={SubmitHandler}>
          
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Add Ticket"}
          </button>

          {error !== '' ? <div className="FormEl_Error">{error}</div> : null}
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  )
}

export default Form
