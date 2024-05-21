import { useState } from "react";
import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Check from "../../assets/icons/Check.svg?react";

interface modalProps {
  isShow: boolean;
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
  onSelect: (option: string) => void;
}

export default function ListModal(props: modalProps) {
  const { isShow, onClick, onSelect } = props;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const ottOptions = [
    "넷플릭스",
    "왓챠",
    "디즈니+",
    "웨이브",
    "티빙",
    "쿠팡플레이",
    "리프텔",
    "네이버시리즈",
    "기타",
  ];

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    onSelect(ottOptions[index]);
  };

  return (
    <BottomSheet isShow={isShow} onClick={onClick}>
      <BottomSheetHeader />
      <div
        className="text-white font-pretendard bg-gray14 py-[3rem] px-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col items-start text-lg font-normal leading-6 gap-9">
          <li className="text-[2.8rem] h-[2.8rem] font-semibold leading-7">
            OTT를 선택해주세요.
          </li>
          {ottOptions.map((option, index) => (
            <li
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(index);
              }}
              className="flex text-[1.6rem] items-center h-[2.4rem] w-full gap-2 cursor-pointer"
            >
              {option}
              {selectedOption === index && (
                <div className="ml-auto">
                  <Check />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </BottomSheet>
  );
}