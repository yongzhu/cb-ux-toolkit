import { Subject } from "rxjs";
import { CutResultModel } from "../models/data-structures/result-model";
import { CutLinkModel } from "../models/data-structures/link-model";
import { CutFilterModel } from "../models/data-structures/filter-model";
import { CutCandidateModel } from "../models/data-structures/candidate-model";
import { indexOf } from "lodash-es";

export class SearchResultService {

  private resultData: CutResultModel;
  tabChangeDetectWithData = new Subject<CutLinkModel[]>();
  typeChangeDetectWithData = new Subject<CutFilterModel[]>();
  listDetectWithData = new Subject<CutCandidateModel[]>();

  myCandidatesList: string[] = ['Q5ANR-lTP11sxF12', 'Q5ANR-lTP11sxF7', 'Q5ANR-lTP11sxF2']

  getFilter = (name: string) => {
    return this.resultData[name].slice();
  }

  setServiceData = (data: CutResultModel) => {
    this.resultData = data;
  }

  getServiceData = () => {
    return this.resultData;
  }

  tabChangedHandler = (id: number, key: string) => {
    let tabsData = this.getFilter(key);
    const newData = tabsData.map((single: CutLinkModel) => {
      return {
        ...single,
        isSelected: single.id === id
      }
    })
    this.tabChangeDetectWithData.next(newData)
    //value is hard coded at this point on time.  we have to fix it later on
    const listData = this.getFilter('resultList');
    //value is hard coded at this point on time.  we have to fix it later on
    if (id === 1) {
      this.listDetectWithData.next(listData)
    } else {
      this.listDetectWithData.next([])
    }
  }

  typeChangedHandler = (id: number, key: string) => {
    let tabsData = this.getFilter(key);
    const newData = tabsData.map((single: CutLinkModel) => {
      return {
        ...single,
        isSelected: single.id === id
      }
    })
    this.typeChangeDetectWithData.next(newData)
    //value is hard coded at this point on time.  we have to fix it later on
    const listData = this.getFilter('resultList');
    //value is hard coded at this point on time.  we have to fix it later on
    switch (id) {
      case 1:
        this.listDetectWithData.next(listData)
        break;
      case 2:
        const inPreocessData = listData.filter((single: CutCandidateModel) => {
          return single.inProgress === true;
        })
        this.listDetectWithData.next(inPreocessData);
        break;
      case 4:
        const newResumeBase = listData.filter((single: CutCandidateModel) => {
          return single.isFromResumeBase === true;
        })
        this.listDetectWithData.next(newResumeBase);
        break;
      case 3:
        const myCandidates = listData.filter((single: CutCandidateModel) => {
          return this.myCandidatesList.indexOf(single.id) !== -1;
        })
        this.listDetectWithData.next(myCandidates);
        break;
      default:
        this.listDetectWithData.next(listData)
        break;
    }
  }

}
