module.exports = {
    data_test_id: {
        pelanggan_page_heading_title_text: '//a[contains(text(), "dashboard")]',
        pelanggan_page_heading_sub_title_text: '//a[@href="/customers"]',
        tambah_button: '//a[contains(text(), "tambah")]',
        tambah_pelanggan_page_heading_sub_title_text: '//*[contains(text(), " / baru")]',
        pelanggan_nama_input: '//*[@id="nama"]',
        pelanggan_no_hp_input: '//*[@id="no.hp"]',
        pelanggan_alamat_input: '//*[@id="alamat"]',
        pelanggan_keterangan_input: '//*[@id="keterangan"]',
        simpan_button: '//button[contains(text(), "simpan")]',
        pelanggan_created_successfully_text_head: '//*[contains(text(), "success")]',
        pelanggan_created_successfully_text_body: '//*[contains(text(), "item ditambahkan")]',
        pelanggan_action_menu_button: '//td[contains(text(), "${pelanggan_name}")]/following-sibling::td/button',
        pelanggan_hapus_action_menu_button: '//td[contains(text(), "${pelanggan_name}")]/following-sibling::td/div/div/button',
        pelanggan_hapus_modal: '//header[contains(text(), "hapus")]',
        pelanggan_hapus_modal_delete_button: '//button[contains(text(), "Delete")]',
        pelanggan_deleted_successfully_text_head: '//*[contains(text(), "success")]',
        pelanggan_deleted_successfully_text_body: '//*[contains(text(), "item dihapus")]'
    }
}
