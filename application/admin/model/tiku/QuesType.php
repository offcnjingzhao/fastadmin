<?php

namespace app\admin\model\tiku;

use think\Model;


class QuesType extends Model
{

    

    

    // 表名
    protected $name = 'question_type';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    







}
