import EStylesheet from "react-native-extended-stylesheet";
import { pxToDp, deviceWidth } from "../../Config/utils";

const styles = EStylesheet.create({
  top: {
    display: "flex",
    height: pxToDp(140),
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: pxToDp(20)
  },
  topTxt: {
    fontSize: pxToDp(56),
    paddingLeft: pxToDp(33),
    fontWeight: "bold"
  },
  topSearchBox: {
    paddingRight: pxToDp(33),
    paddingBottom: pxToDp(10)
  },
  topSearch: {},
  wrapper: {
    height: pxToDp(350),
    paddingTop: pxToDp(30),
    backgroundColor: "#fff"
  },
  slide: {
    flex: 1,
    width: pxToDp(719),
    justifyContent: "center",
    backgroundColor: "#fff",
    marginLeft: (deviceWidth - pxToDp(719)) / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: pxToDp(30)
    },
    shadowOpacity: 0.6
  },
  image: {
    width: "100%",
    flex: 1,
    borderRadius: pxToDp(20)
  },
  paginationStyle: {
    position: "absolute",
    bottom: pxToDp(10),
    right: (deviceWidth - pxToDp(719)) / 2
  },
  paginationText: {
    color: "white",
    fontSize: pxToDp(40)
  },
  notice: {
    display: "flex",
    height: pxToDp(120),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: pxToDp(60),
    paddingLeft: pxToDp(20),
    paddingRight: pxToDp(20)
  },
  noticeTxt: {
    flex: 1,
    marginLeft: pxToDp(20),
    color: "#666",
    fontSize: pxToDp(26)
  },
  noticeMore: {
    color: "#999",
    fontSize: pxToDp(24)
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: pxToDp(60),
    paddingLeft: pxToDp(37),
    paddingRight: pxToDp(37)
  },
  navIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: pxToDp(121),
    height: pxToDp(121),
    borderRadius: pxToDp(50)
  },
  navIconImage: {
    width: pxToDp(80),
    height: pxToDp(80)
  },
  navIconActive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: pxToDp(121),
    height: pxToDp(121),
    borderRadius: pxToDp(50),
    backgroundColor: "#fff",
    shadowColor: "#E7E7E7",
    shadowOffset: {
      height: pxToDp(10)
    },
    shadowRadius: pxToDp(19),
    shadowOpacity: 1
  },
  navTxt: {
    fontSize: pxToDp(28),
    color: "#999",
    textAlign: "center",
    marginTop: pxToDp(20)
  },
  navTxtActive: {
    fontSize: pxToDp(36),
    color: "#333",
    textAlign: "center",
    marginTop: pxToDp(20)
  },
  list: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: pxToDp(60)
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    width: pxToDp(720),
    height: pxToDp(272),
    backgroundColor: "#fff",
    shadowColor: "#E2E2E2",
    shadowOffset: {
      height: pxToDp(5)
    },
    shadowRadius: pxToDp(5),
    shadowOpacity: 0.8,
    borderRadius: pxToDp(30),
    marginBottom: pxToDp(40),
    padding: pxToDp(32)
  },
  listItemImage: {
    width: pxToDp(208),
    height: pxToDp(208),
    resizeMode: "center"
  },
  listItemDetail: {
    flex: 1,
    marginLeft: pxToDp(32)
  },
  listItemDetailTitle: {
    fontSize: pxToDp(30),
    height: pxToDp(70),
    color: "#000",
    fontWeight: "bold",
    marginTop: pxToDp(15),
    marginBottom: pxToDp(15)
  },
  listItemDetailLimit: {
    fontSize: pxToDp(24),
    height: pxToDp(30),
    color: "#A5A8B2"
  },
  listItemDetailOperator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: pxToDp(29)
  },
  listItemDetailOperatorHot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    flexDirection: "row"
  },
  listItemDetailOperatorText: {
    fontSize: pxToDp(24),
    color: "#FFB834",
    marginLeft: pxToDp(10)
  },
  listItemDetailOperatorBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: pxToDp(133),
    height: pxToDp(54),
    backgroundColor: "#53DEDC",
    borderRadius: pxToDp(27),
    shadowColor: "#3AD8D5",
    shadowOffset: {
      height: pxToDp(5)
    },
    shadowRadius: pxToDp(5),
    shadowOpacity: 0.8
  },
  listItemDetailOperatorBtnTxt: {
    fontSize: pxToDp(24),
    color: "#fff",
    fontWeight: "bold"
  },
  gotop: {
    position: "absolute",
    right: pxToDp(28),
    bottom: pxToDp(120)
  },
  floatNav: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20)
  },
  floatNavList: {
    display: "flex",
    height: pxToDp(100),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: pxToDp(33),
    paddingRight: pxToDp(33)
  },
  floatNavListItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: pxToDp(78)
  },
  floatNavListItemTxt: {
    fontSize: pxToDp(32),
    fontWeight: "bold",
    color: "#93959E"
  },
  floatNavListItemTxtActive: {
    fontSize: pxToDp(42),
    color: "#0ECCC8"
  },
  floatNavListItemLine: {
    width: pxToDp(60),
    height: pxToDp(6),
    marginTop: pxToDp(18),
    backgroundColor: "transparent"
  },
  floatNavListItemLineActive: {
    width: pxToDp(60),
    height: pxToDp(6),
    borderRadius: pxToDp(3),
    backgroundColor: "#0ECCC8",
    shadowColor: "#1ED1CD",
    shadowOpacity: 0.32,
    shadowOffset: {
      height: pxToDp(5)
    },
    shadowRadius: pxToDp(9),
    marginTop: pxToDp(18)
  }
});

export default styles