define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'tiku/question/index' + location.search,
                    add_url: 'tiku/question/add',
                    edit_url: 'tiku/question/edit',
                    del_url: 'tiku/question/del',
                    multi_url: 'tiku/question/multi',
                    table: 'question',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'site_type', title: __('Site_type')},
                        {field: 'qc_id', title: __('Qc_id')},
                        {field: 'pid', title: __('Pid')},
                        {field: 'name', title: __('Title')},
                        {field: 'score', title: __('Score'), operate:'BETWEEN'},
                        {field: 'status', title: __('Status')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'typelist', title: __('Typelist')},
                        {field: 'site_id', title: __('Site_id')},
                        {field: 'explain', title: __('Explain')},
                        {field: 'small_type', title: __('Small_type')},
                        {field: 'question_difficulty', title: __('Question_difficulty')},
                        {field: 'code', title: __('Code')},
                        {field: 'weigh', title: __('Weigh')},
                        {field: 'sum_post', title: __('Sum_post')},
                        {field: 'fail_sum', title: __('Fail_sum')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});