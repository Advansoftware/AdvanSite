<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
 	
 	public function __contruct(){
 		parent::__construct();

 	}

	public function index()
	{
		$data['titulo'] = "Advansoftware";
		$data['bemvindo'] = "Advansoftware";
		$data['frase'] = "Suporte e serviços para computadores e criacao de websites.";
		$data['Advansoftware']  = "Advansoftware, Criando e Inovando.";
		$this->load->helper('html');
		$this->load->view('home', $data);
		$this->load->view('footer');
	}
}
