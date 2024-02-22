function pxToRem(px) {
    if (/%/gi.test(px)) {
        // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
        return px;
    } else {
        return parseFloat(px) / 75 + "rem"; // 这里的75，和vue.config.js rootValue值对应
    }
}
export default pxToRem;