import './progressBar.css'

function ProgressBar({height}){
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{height: `${height}%`}}></div>
        </div>
    )
}
export default ProgressBar