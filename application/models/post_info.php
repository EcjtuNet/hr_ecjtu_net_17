<?php

class Post_info extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function insertInfo($data)
	{

		$info = array(
			'grade_input' => $data['grade_input'],
			'join_title' => $data['join_title'],
			'user_QQ' => $data['user_QQ'],
			'user_college' => $data['user_college'],
			'user_major' => $data['user_major'],
			'user_name' => $data['user_name'],
			'user_phone' => $data['user_phone'],
			'user_sex' => $data['user_sex']
			);
		if($data['join_center'] == '新闻出版中心')
		{
			$query = $this->db->insert('xinwensingup',$info);
		}elseif ($data['join_center'] == '技术研发中心') {
			$query = $this->db->insert('jishusingup',$info);
		}elseif ($data['join_center'] == '行政管理中心') {
			$query = $this->db->insert('xingzhengsingup',$info);
		}elseif ($data['join_center'] == '产品运营中心') {
			$query = $this->db->insert('chanpinsingup',$info);
		}
		if($query)
		{
			return 1;
		}
	}
}
