import React from "react";
import { sliceEvents, createPlugin } from "@fullcalendar/core";

class CustomView extends React.Component {
  render(props) {
    let segs = sliceEvents(props, true); // allDay=true

    return (
      <Fragment>
        <div className="view-title">
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div className="view-events">{segs.length} events</div>
      </Fragment>
    );
  }
}

export default createPlugin({
  views: {
    custom: CustomView,
  },
});
