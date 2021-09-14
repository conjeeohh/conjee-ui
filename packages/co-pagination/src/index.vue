<script>
import "./util.css";

export default {
  name: "CoPagination",
  data() {
    return {
      currentSelsetPageSizes: "",
    };
  },
  props: {
    total: Number,
    pagenum: Number,
    pagesize: Number,
    background: String,
    "page-sizes": Array,
  },
  computed: {
    currentPagenums() {
      return this.total % this.pagesize === 0
        ? this.total / this.pagesize
        : this.total / this.pagesize + 1;
    },
    nums() {
      return this.updateViewPagenums();
    },
  },
  methods: {
    clickPagenum(clickPagenum) {
      this.$emit("update:pagenum", clickPagenum);
    },
    updateViewPagenums() {
      if (this.pagenum >= 1 && this.pagenum <= 4) {
        return [2, 3, 4, 5, 6];
      } else if (this.currentPagenums - this.pagenum <= 3) {
        return Array.apply(null, { length: 5 }).map((item, index) => {
          return this.currentPagenums - 5 + index;
        });
      } else {
        return Array.apply(null, { length: 5 }).map((item, index) => {
          return this.pagenum + index - 2;
        });
      }
    },
  },
  render(h) {
    const _this = this;
    return h("div", { class: "co-pagination" }, [
      _this.pageSizes
        ? h("div", { class: ["co-pagination_total"] }, `共 ${_this.total} 条`)
        : null,
      _this.pageSizes
        ? h(
            "co-select",
            {
              props: {
                value: _this.pagesize,
              },
              on: {
                input(item) {
                  _this.pagesize = item;
                },
              },
            },
            _this.pageSizes.map((item) => {
              return h("co-option", {
                props: {
                  value: item,
                  label: `${item}条/页`,
                },
              });
            })
          )
        : null,
      h(
        "button",
        {
          class: [
            "co-pagination_prebtn",
            _this.pagenum === 1 ? "co-pagination_disabled" : "",
          ],
          on: {
            click() {
              _this.pagenum === 1
                ? null
                : _this.clickPagenum(_this.pagenum - 1);
            },
          },
        },
        [
          h("svg", { class: "icon", attrs: { "aria-hidden": true } }, [
            h("use", { attrs: { "xlink:href": "#icon-arrow-left-bold" } }),
          ]),
        ]
      ),
      h("div", { class: "co-pagination_pager" }, [
        _this.currentPagenums > 7
          ? h("ul", [
              h(
                "li",
                {
                  class: [
                    _this.pagenum === 1 ? "co-pagination_currentPage" : "",
                    _this.background ? "co-pagination_bgc" : "",
                  ],
                  style: {
                    "background-color": _this.background,
                  },
                  on: {
                    click() {
                      _this.clickPagenum(1);
                    },
                  },
                },
                1
              ),
              _this.pagenum >= 5
                ? h(
                    "li",
                    {
                      style: {
                        "background-color": _this.background,
                      },
                      class: [_this.background ? "co-pagination_bgc" : ""],
                      on: {
                        click() {
                          _this.pagenum - 5 <= 1
                            ? _this.clickPagenum(1)
                            : _this.clickPagenum(_this.pagenum - 5);
                        },
                      },
                    },
                    "..."
                  )
                : null,
              _this.nums.map((num) => {
                return h(
                  "li",
                  {
                    style: {
                      "background-color": _this.background,
                    },
                    class: [
                      _this.pagenum === num && _this.pagenum !== 1
                        ? "co-pagination_currentPage"
                        : "",
                      _this.background ? "co-pagination_bgc" : "",
                    ],
                    on: {
                      click() {
                        //   todo
                        _this.clickPagenum(num);
                      },
                    },
                  },
                  num
                );
              }),
              _this.currentPagenums - _this.pagenum > 3
                ? h(
                    "li",
                    {
                      style: {
                        "background-color": _this.background,
                      },
                      class: [_this.background ? "co-pagination_bgc" : ""],
                      on: {
                        click() {
                          if (_this.pagenum + 5 > _this.currentPagenums) {
                            _this.clickPagenum(_this.currentPagenums);
                          } else {
                            _this.clickPagenum(_this.pagenum + 5);
                          }
                        },
                      },
                    },
                    "..."
                  )
                : null,
              h(
                "li",
                {
                  style: {
                    "background-color": _this.background,
                  },
                  class: [
                    _this.pagenum === _this.currentPagenums
                      ? "co-pagination_currentPage"
                      : "",
                    _this.background ? "co-pagination_bgc" : "",
                  ],
                  on: {
                    click() {
                      _this.clickPagenum(_this.currentPagenums);
                    },
                  },
                },
                _this.currentPagenums
              ),
            ])
          : h(
              "ul",
              Array.apply(null, { length: _this.currentPagenums }).map(
                (item, index) => {
                  return h(
                    "li",
                    {
                      style: {
                        "background-color": _this.background,
                      },
                      class: [
                        _this.pagenum === index + 1
                          ? "co-pagination_currentPage"
                          : "",
                        _this.background ? "co-pagination_bgc" : "",
                      ],
                      on: {
                        click() {
                          _this.clickPagenum(index + 1);
                        },
                      },
                    },
                    index + 1
                  );
                }
              )
            ),
      ]),
      h(
        "button",
        {
          class: [
            "co-pagination_sufbtn",
            _this.pagenum === _this.currentPagenums
              ? "co-pagination_disabled"
              : "",
          ],
          on: {
            click() {
              _this.pagenum === _this.currentPagenums
                ? null
                : _this.clickPagenum(_this.pagenum + 1);
            },
          },
        },
        [
          h("svg", { class: "icon", attrs: { "aria-hidden": true } }, [
            h("use", { attrs: { "xlink:href": "#icon-arrow-right-bold" } }),
          ]),
        ]
      ),
      _this.pageSizes
        ? h("div", { class: ["co-pagination_search"] }, [
            "前往",
            h("input", {
              class: ["co-pagination_search-input"],
              attrs: {
                type: "number",
                // value: _this.pagenum,
              },
              on: {
                keyup: function (event) {
                  if (event.keyCode === 13) {
                    return _this.clickPagenum(parseInt(event.target.value));
                  }
                  // console.log("执行了");
                },
              },
            }),
            "页",
          ])
        : null,
    ]);
  },
};
</script>

<style lang="less" scoped>
.co-pagination {
  color: #303133;
  font-weight: 700;
  height: 28px;
  line-height: 28px;
  .co-pagination_total {
    display: inline-block;
    margin-right: 10px;
    min-width: 35.5px;
    font-size: 13px;
    font-weight: 400;
    color: #606266;
  }
  .co-select {
    height: 28px;
    line-height: 28px;
    font-size: 13px;
  }
  button {
    display: inline-block;
    padding: 0 6px;
    margin: 0;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
    border: none;
    background: 50% no-repeat;
    background-size: 16px;
    background-color: #fff;
    cursor: pointer;
    font-size: 13px;
    color: #303133;
  }
  .co-pagination_prebtn {
    padding-right: 12px;
  }
  .co-pagination_sufbtn {
    padding-left: 12px;
  }
  .co-pagination_disabled {
    cursor: not-allowed;
  }
  .co-pagination_pager {
    display: inline-block;
    user-select: none;
    list-style: none;
    li {
      padding: 0 4px;
      background: #fff;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      margin: 0;
    }
    .co-pagination_bgc {
      min-width: 30px;
      margin: 0 5px;
      border-radius: 2px;
    }
    .co-pagination_currentPage {
      /* background-image: -webkit-linear-gradient(
        bottom,
        #59c173,
        #a17fe0,
        #5d26c1
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text; */
      color: #409eff;
    }
  }
  .co-pagination_search {
    display: inline-block;
    margin-left: 24px;
    font-weight: 400;
    color: #606266;
    .co-pagination_search-input {
      margin: 0 5px;
      height: 28px;
      width: 50px;
      border: 1px solid #c0c4cc;
      border-radius: 3px;
      text-align: center;
      outline: none;
      &:focus {
        border: 1px solid #7763e9;
      }
    }
  }
}
</style>