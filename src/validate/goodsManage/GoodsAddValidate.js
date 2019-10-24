/**
 * 商品添加valid
 *
 * @date 2019-09-20
 * @author liuzhuang
 */

/**
 * 定义部门valid类
 */
class GoodsAddValidate {

    static roleValidate = {
        //商品名
        goodsName: [
            {required: true, message: '请输入商品名称', trigger: 'blur'},
        ],
        //商品分类
        goodsSort: [
            {required: true, message: '请选择商品分类', trigger: 'change'},
        ],
        //商品图片
        goodsImg: [
            {required: true, message: '请上传商品图片', trigger: 'blur'},
        ],
        //商品规范
        goodsNorm: [
            {required: true, message: '请选择商品规范', trigger: 'change'},
        ],
        //商品编码
        goodsCode: [
            {required: true, message: '请输入商品编码', trigger: 'blur'},
        ],
        //商品价格
        goodsPrice: [
            {required: true, message: '请输入部商品价格', trigger: 'blur'},
        ],
        //商品划线价
        goodsCrossPrice: [
            {required: true, message: '请输入商品划线价', trigger: 'blur'},
        ],
        //商品数量
        goodsAmount: [
            {required: true, message: '请输入商品库存数量', trigger: 'blur'},
        ],
        //商品重量
        goodsWeight: [
            {required: true, message: '请输入商品重量', trigger: 'blur'},
        ],
        //库存计算方式
        amountMethod: [
            {required: true, message: '请输入选择库存计算方式', trigger: 'change'},
        ],
        //商品详情
        goodsDetail: [
            {required: true, message: '请输入商品详情', trigger: 'blur'},
        ],
        //商品运费
        goodsFare: [
            {required: true, message: '请选择运费模板', trigger: 'change'},
        ],
        //商品状态
        goodsState: [
            {required: true, message: '请选择商品状态', trigger: 'change'},
        ],
        //初始销量
        initSalesVolume: [
            {required: true, message: '请输入初始销量', trigger: 'blur'},
        ],
        //商品排序
        goodsSequence: [
            {required: true, message: '请输入商品排序', trigger: 'blur'},
        ]
    }
}

// 向外暴露GoodsAddValidate
export default GoodsAddValidate;
