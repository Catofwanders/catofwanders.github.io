(this.webpackJsonpfindpair = this.webpackJsonpfindpair || []).push([
  [0],
  {
    29: function (n, e, t) {
      n.exports = "./static/media/card-back.a06220d0.jpg";
    },
    31: function (n, e, t) {
      n.exports = t(55);
    },
    36: function (n, e, t) {},
    55: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t(0),
        r = t.n(a),
        i = t(23),
        c = t.n(i);
      t(36),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var u = t(3),
        o = t(4);
      function s() {
        var n = Object(u.a)([
          "\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      var l = o.a.div(s()),
        f = t(2),
        p = t(12),
        d = t.n(p),
        m = t(27),
        v = t(28),
        g = t.n(v);
      function h() {
        var n = Object(u.a)([
          "\n  display: flex;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-wrap: wrap;\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var b = o.a.div(h()),
        j = t(7),
        O = t(9),
        x = {
          2: 50,
          6: 25,
          8: 25,
          10: 20,
          12: 100 / 6,
          15: 100 / 6,
          18: 100 / 6,
          21: 100 / 7,
        },
        w = t(8),
        E = function (n, e, t) {
          return Object(j.a)({}, n, Object(w.a)({}, e, t));
        },
        y = function (n) {
          var e;
          return (e = []).concat.apply(e, Object(O.a)(n));
        },
        k = function (n, e) {
          var t = (function (n, e) {
              for (var t = [], a = 1, r = 1; r <= n; r++)
                t.push([
                  { id: a, image: e[r - 1] },
                  { id: a + 1, image: e[r - 1] },
                ]),
                  (a += 2);
              return t;
            })(n / 2, e),
            a = y(t);
          return {
            pairs: t,
            shuffledArray: a.sort(function () {
              return Math.random() - 0.5;
            }),
          };
        },
        z = t(29),
        S = t.n(z);
      function V() {
        var n = Object(u.a)([
          "\n  position: relative;\n  width: ",
          ";\n  min-height: ",
          ";\n  border: 5px solid #1b161d;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 1px;\n  > * {\n    position: relative;\n    z-index: 1;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: rotateY(0);\n    transition: 0.5s;\n    background: url(",
          ") no-repeat center/cover;\n  }\n  &.active {\n    pointer-events: none;\n    &:after {\n      transform: rotateY(-180deg);\n      background-image: ",
          ";\n    }\n  }\n  p {\n    margin: 0;\n  }\n",
        ]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      var F = o.a.div(
        V(),
        function (n) {
          var e = n.width;
          return "calc(".concat(e, "% - 2px)") || !1;
        },
        function (n) {
          var e = n.width;
          return "calc(".concat(e, "vh - ").concat(e, "px)") || !1;
        },
        S.a,
        function (n) {
          var e = n.image;
          return "url(".concat(e, ")");
        }
      );
      function C(n) {
        var e,
          t,
          a = n.index,
          i = n.width,
          c = n.сlick,
          u = n.state,
          o = n.image,
          s =
            ((e = u.pairs),
            (t = a),
            e.some(function (n) {
              return n === t;
            })),
          l = u.previousValue === a;
        return r.a.createElement(F, {
          className: (l || s) && "active",
          width: i,
          onClick: function () {
            return c(a);
          },
          image: null === o || void 0 === o ? void 0 : o.webformatURL,
        });
      }
      var B = function (n) {
          var e = n.initialValues,
            t = n.pairs,
            i = n.shuffledArray,
            c = n.size,
            u = n.setFinish,
            o = Object(a.useState)(!0),
            s = Object(f.a)(o, 2),
            l = s[0],
            p = s[1],
            d = Object(a.useState)(e),
            m = Object(f.a)(d, 2),
            v = m[0],
            g = m[1];
          Object(a.useEffect)(
            function () {
              if (l) {
                var n = y(t).map(function (n) {
                  return n.id;
                });
                g(function (e) {
                  return E(e, "pairs", n);
                });
                var e = setTimeout(function () {
                  g(function (n) {
                    return E(n, "pairs", []);
                  }),
                    p(!1);
                }, 5e3);
                return function () {
                  clearTimeout(e);
                };
              }
            },
            [l, t]
          ),
            Object(a.useEffect)(
              function () {
                v.pairs.length !== 2 * c || l || u(!0);
              },
              [v, c, u, l]
            );
          var h = Object(a.useCallback)(
            function (n) {
              var e,
                a =
                  ((e = n),
                  t.find(function (n) {
                    return n.find(function (n) {
                      return n.id === e;
                    });
                  }));
              v.previousValue
                ? (g(function (n) {
                    return E(n, "previousValue", null);
                  }),
                  (function (n, e) {
                    return n.some(function (n) {
                      return n.id === e;
                    });
                  })(a, v.previousValue) &&
                    g(function (e) {
                      return E(
                        e,
                        "pairs",
                        [].concat(Object(O.a)(e.pairs), [v.previousValue, n])
                      );
                    }))
                : g(function (e) {
                    return Object(j.a)({}, e, { previousValue: n, same: a });
                  });
            },
            [t, v]
          );
          return i.map(function (n) {
            var e = n.id,
              t = n.image,
              a = void 0 === t ? {} : t;
            return r.a.createElement(C, {
              state: v,
              сlick: h,
              key: e,
              index: e,
              width: x[c],
              image: a,
            });
          });
        },
        N = { same: [], previousValue: null, pairs: [] },
        A = function (n) {
          var e = n.size,
            t = n.images,
            i = Object(a.useState)(!1),
            c = Object(f.a)(i, 2),
            u = c[0],
            o = c[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              b,
              null,
              t &&
                r.a.createElement(
                  B,
                  Object.assign({ initialValues: N, setFinish: o, size: e }, t)
                ),
              u && r.a.createElement("p", null, "Finish!")
            )
          );
        };
      function J() {
        var n = Object(u.a)([
          "\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  p {\n    margin-right: 10px;\n  }\n",
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      var M = o.a.div(J()),
        T = function (n) {
          var e = n.size,
            t = n.setSize;
          return r.a.createElement(
            M,
            null,
            r.a.createElement("p", null, "Choice pairs size: "),
            r.a.createElement(
              "select",
              {
                value: e,
                onChange: function (n) {
                  return t(Number(n.target.value));
                },
              },
              Object.keys(x).map(function (n) {
                return r.a.createElement(
                  "option",
                  { key: "NavBar-".concat(n), value: n },
                  n,
                  " pairs"
                );
              })
            )
          );
        },
        W = function () {
          var n = Object(a.useState)(6),
            e = Object(f.a)(n, 2),
            t = e[0],
            i = e[1],
            c = (function (n, e) {
              var t = Object(a.useState)(e),
                r = Object(f.a)(t, 2),
                i = r[0],
                c = r[1],
                u = Object(a.useState)(!0),
                o = Object(f.a)(u, 2),
                s = o[0],
                l = o[1];
              return (
                Object(a.useEffect)(
                  function () {
                    (function () {
                      var e = Object(m.a)(
                        d.a.mark(function e() {
                          var t;
                          return d.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      l(!0),
                                      (e.next = 4),
                                      g.a.get(n)
                                    );
                                  case 4:
                                    200 === (t = e.sent).status && c(t.data);
                                  case 6:
                                    return (e.prev = 6), l(!1), e.finish(6);
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, , 6, 9]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })()();
                  },
                  [n]
                ),
                { loading: s, data: i }
              );
            })(
              "https://pixabay.com/api/?key=15966127-0de5e2f734fe4c748678e72b0&q=peoples&image_type=photo&per_page=".concat(
                t < 3 ? 3 : t
              ),
              null
            ),
            u = c.loading,
            o = c.data,
            s =
              !u && o && k(2 * t, null === o || void 0 === o ? void 0 : o.hits),
            l =
              !u && o
                ? r.a.createElement(A, { size: t, images: s })
                : r.a.createElement("p", null, "loading");
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(T, { size: t, setSize: i }),
            l
          );
        };
      var Y = function () {
        return r.a.createElement(l, null, r.a.createElement(W, null));
      };
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(Y, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (n) {
              n.unregister();
            })
            .catch(function (n) {
              console.error(n.message);
            });
    },
  },
  [[31, 1, 2]],
]);
//# sourceMappingURL=main.dcbffe3b.chunk.js.map
