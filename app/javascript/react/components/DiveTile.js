import React from 'react'
import { Link } from 'react-router-dom'
import Modali, { useModali } from 'modali'
import DiveLog from './DiveLog'
import DiveSite from './DiveSite'

const DiveTile = () => {
  const [newModal, diveModal] = useModali({
  animated: true,
  title: 'Dive Log',
  message:['Lets Log The Dive Shall We!!!', <DiveLog/>, <DiveSite/>],
  buttons:
    [<Modali.Button
      label="Cancel"
      isStyleCancel
      onClick={() => diveModal()}
    />,]
});
  return (
    <div className="button" onClick={diveModal}>
      <button>
        Dive Log
      </button>
      <Modali.Modal {...newModal}/>
      </div>
  );
};
export default DiveTile
