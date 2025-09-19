import React from "react"
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
const DateInputControl = ({ }) => {
    return (
        <div className="input-container-col">
            <label className="text-md">{t("End date by")}</label>
            <div className="input-control-with-icon-container">
                <input type="text" className="input-control-with-icon text-md" />
                <CalendarDateRangeIcon className="input-control-icon-left" />
            </div>
        </div>
    );
}
export default DateInputControl;