const mixin = {
  data() {
    return {
      isUpDown: true,
      total: 0,
      loadInfo: '暂无数据',
      pager: {
        currentPage: 1,
        countPerPage: 10
      },
    }
  },
  methods: {

    onUpDown () {
      this.isUpDown = !this.isUpDown
    },
    onSubmit () { },
    search () {

    },
    handleDelete (id) {
      // console.log(id)
    },
    back () {
      this.$router.go(-1)
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //设置单元格背景
    cellStyle({row, column, rowIndex, columnIndex}) {
        return 'height:35px!important; border-color:#cccccc!important; color:#000000!important; padding:0px!important; height:40px!important'
    },
    // 给form表达赋值
    changeFormData (oldFormData, newFormData) {
      console.log(oldFormData, newFormData);
      const newFormData1 = JSON.parse(JSON.stringify(newFormData))
      for ( let i in newFormData1) {
        this.$set(oldFormData, i, newFormData1[i])
      }
    },
    async getListData (url) {
      this.loadInfo = '数据加载中...'
      const params = {
        ...this.searchForm,
        createdDateStart: this.searchForm.createdDate?this.searchForm.createdDate[0]:null,
        createdDateEnd: this.searchForm.createdDate?this.searchForm.createdDate[1]:null,
        createdDate: null,
        currentPage: this.pager.currentPage - 1,
        countPerPage: this.pager.countPerPage,
      }
      const res = await this.$get(url,params)
      this.formData = res.pageData
      this.loadInfo = '暂无数据'
      this.total = res.totalElements
    },
  },
}
export default mixin