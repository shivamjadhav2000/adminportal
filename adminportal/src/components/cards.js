import react from "react"
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import "./cards.css"

let dummy=[
    {count:"111",about:"Invoice"},
    {count:"126",about:"Sales"},
    {count:"222",about:"Revenue"},

]
function Card(){
    return (
    <div className="CardHolder">
    <div className="Card">
        <div><p>{dummy[0].count}</p>
        <h2>{dummy[0].about}</h2>
        </div>
        <div className="icon">
        <AssignmentIcon  style={{ fontSize: 50}} />
        </div>
    </div>
    <div className="Card">
    <div>
        <p>{dummy[1].count}</p>
        <h2>{dummy[1].about}</h2>
    </div>
    <div className="icon">
        <AttachMoneyIcon style={{ fontSize: 50}} />
        </div>
    </div>
    <div className="Card">
       <div>
        <p>{dummy[2].count}</p>
        <h2>{dummy[2].about}</h2>
       </div> 
       <div className="icon">
        <AssessmentIcon style={{ fontSize: 50}} />
        </div>
    </div>

    </div>

    )
}
export default Card