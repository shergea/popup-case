import * as React from "react";
import Popup from "../../components/popup";
import PopupContainer from "../../components/popupContainer";
import Sidebar from "../../components/sideBar";
import { useAppSelector, useAppDispatch } from "../../config/hooks";
import Setting from "../../models/setting";
import { fetchFonts, selectHome, setSetting } from "./homeSlice";

function Home(): JSX.Element {
  const home = useAppSelector(selectHome);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchFonts());
  }, []);

  const onSettingFormChange = (setting: Setting) => {
    dispatch(setSetting(setting));
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/4">
          <Sidebar onFormChange={onSettingFormChange} data={home.setting} />
        </div>
        <div className="basis-3/4">
          <PopupContainer>
            <Popup setting={home.setting} fonts={home.font.entities} />
          </PopupContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
