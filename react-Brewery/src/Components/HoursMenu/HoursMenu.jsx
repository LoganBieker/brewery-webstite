import '@/Components/HoursMenu/HoursMenu.css'
export default function HoursMenu() {

    return (
        <div className="hours-menu">
            <h1 className="hours-menu-title">Operating Hours</h1>
            <div className="hours-menu-container">
                <div className="hours-menu-days">
                    <p className="hours-menu-day">Monday</p>
                    <p className="hours-menu-day">Tuesday</p>
                    <p className="hours-menu-day">Wednesday</p>
                    <p className="hours-menu-day">Thursday</p>
                    <p className="hours-menu-day">Friday</p>
                    <p className="hours-menu-day">Saturday</p>
                    <p className="hours-menu-day">Sunday</p>
                </div>
                <div className="hours-menu-times">
                    <p className="hours-menu-time">5:00pm - 9:00</p>
                    <p className="hours-menu-time">5:00pm - 9:00</p>
                    <p className="hours-menu-time">5:00pm - 11:00</p>
                    <p className="hours-menu-time">5:00pm - 9:00</p>
                    <p className="hours-menu-time">3:00pm - 11:00</p>
                    <p className="hours-menu-time">10:00pm - 11:00</p>
                    <p className="hours-menu-time">12:00pm - 9:00</p>
                </div>
            </div>
       </div> 
    );
}