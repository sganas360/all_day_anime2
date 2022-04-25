import { Spinner } from "react-bootstrap"

function SpinnerComponent () {
  return (
    <div className=" d-flex justify-content-center">
       <Spinner className = "text" animation="border" role="status" >
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  )
}

export default SpinnerComponent