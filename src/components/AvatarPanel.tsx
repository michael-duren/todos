import { useContext } from 'react';
import { GeneralContext, IGeneralContext } from '../context/GeneralContext';
import { toTitleCase } from '../utils/toTitleCase';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CategoryIcon from './CategoryIcon';

export default function AvatarPanel() {
  const { completeToDoList } = useContext(GeneralContext) as IGeneralContext;

  return (
    <div className="col-span-3  flex justify-center">
      <div className="flex-col h-full w-full items-center justify-center">
        <div className="flex mx-8 justify-start gap-4 items-center">
          <img
            className="h-20 w-20 rounded-full"
            src="src/assets/Avatar-self.png"
            alt="user avatar"
          />
          <h3 className="text-lg">Michael Duren</h3>
        </div>
        <div className="m-8 rounded-xl bg-gray-50 shadow-lg p-4">
          <h4 className="text-xl">Completed:</h4>
          {completeToDoList.map((todo) => {
            const { name, category } = todo;
            return (
              <div
                className={`flex w-64 my-8 bg-white  shadow-sm justify-between items-center  p-4 rounded-xl`}
              >
                <div className="flex">
                  <div className="flex items-center gap-2">
                    <CheckOutlinedIcon
                      fontSize="small"
                      className="text-white p-1 bg-green-500 rounded-full"
                    />
                    <h4 className="text-gray-700 text-sm font-semibold hover:text-gray-900 hover:font-bold cursor-pointer">
                      {toTitleCase(name)}
                    </h4>
                  </div>
                </div>
                <CategoryIcon category={category} styles="text-gray-500" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
