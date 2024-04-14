module.exports = {
    data_test_id: {
        pengguna_page_heading_title_text: '//a[contains(text(), "dashboard")]',
        pengguna_page_heading_sub_title_text: '//a[@href="/users"]',
        tambah_button: '//a[contains(text(), "tambah")]',
        tambah_pengguna_page_heading_sub_title_text: '//*[contains(text(), " / baru")]',
        pengguna_nama_input: '//*[@id="nama"]',
        pengguna_email_input: '//*[@id="email"]',
        pengguna_password_input: '//*[@id="password"]',
        simpan_button: '//button[contains(text(), "simpan")]',
        pengguna_created_successfully_text_head: '//*[contains(text(), "success")]',
        pengguna_created_successfully_text_body: '//*[contains(text(), "item ditambahkan")]',
        pengguna_action_menu_button: '//td[contains(text(), "${pengguna_name}")]/following-sibling::td/button',
        pengguna_hapus_action_menu_button: '//td[contains(text(), "${pengguna_name}")]/following-sibling::td/div/div/button',
        pengguna_hapus_modal: '//header[contains(text(), "hapus")]',
        pengguna_hapus_modal_delete_button: '//button[contains(text(), "Delete")]',
        pengguna_deleted_successfully_text_head: '//*[contains(text(), "success")]',
        pengguna_deleted_successfully_text_body: '//*[contains(text(), "item dihapus")]'
    }
}
