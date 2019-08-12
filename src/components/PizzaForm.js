import React from "react"

const PizzaForm = (props) => {
  console.log(props)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" onChange={(e)=>props.handleEditForm(e)} value={props.topping}/>
        </div>
        <div className="col">
          <select name="size" value={props.size} onChange={props.handleEditForm} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div  className="form-check">
            <input className="form-check-input"  type="radio" value="Vegetarian" onChange={props.handleEditForm} name="vegetarian"   checked={props.vegetarian}/>
            <label  className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={props.handleEditForm} name="vegetarian" checked={!props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
