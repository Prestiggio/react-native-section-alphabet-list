import { AlphabetListProps, ISectionData } from "../AlphabetList/types"

export interface ListLetterIndexProps {
  onPressLetter: (sectionIndex: number) => void;
  sectionData: ISectionData[];
  indexContainerStyle?: AlphabetListProps["indexContainerStyle"],
  indexLetterStyle?: AlphabetListProps["indexLetterStyle"],
  indexLetterClass?: AlphabetListProps["indexLetterClass"],
  indexLetterContainerStyle?: AlphabetListProps["indexLetterContainerStyle"],
  renderCustomIndexLetter?: AlphabetListProps["renderCustomIndexLetter"],
  letterListContainerStyle?: AlphabetListProps["letterListContainerStyle"]
}
