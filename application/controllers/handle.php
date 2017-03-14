<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Handle extends CI_Controller {
	function __construct()
	{
		parent::__construct();
		$this->load->model('Post_info');
	}

	public function index()
	{
		$data = $_POST;
		$query = $this->Post_info->insertInfo($data);
		echo 1;
	}
}