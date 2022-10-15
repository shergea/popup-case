import React, { useEffect } from "react";
import Popup from "../../components/popup";
import PopupContainer from "../../components/popupContainer";
import Sidebar from "../../components/sideBar";
import { useAppSelector, useAppDispatch } from "../../config/hooks";
import Setting from "../../models/setting";
import { fetchFonts, selectHome, setSetting } from "./homeSlice";

export default function Home() {
  const home = useAppSelector(selectHome);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFonts());
  }, []);

  const onSettingFormChange = (setting: Setting) => {
    dispatch(setSetting(setting));
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/4">
          <Sidebar
            onFormChange={onSettingFormChange}
            data={home.setting}
            fonts={home.font.entities}
          />
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
