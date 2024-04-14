module.exports = {
    data_test_id: {
        kategori_page_heading_title_text: '//a[contains(text(), "dashboard")]',
        kategori_page_heading_sub_title_text: '//a[@href="/categories"]',
        tambah_button: '//a[contains(text(), "tambah")]',
        tambah_kategori_page_heading_sub_title_text: '//*[contains(text(), " / baru")]',
        kategori_nama_input: '//*[@id="nama"]',
        kategori_deskripsi_input: '//*[@id="deskripsi"]',
        simpan_button: '//button[contains(text(), "simpan")]',
        kategori_created_successfully_text_head: '//*[contains(text(), "success")]',
        kategori_created_successfully_text_body: '//*[contains(text(), "item ditambahkan")]',
        kategori_action_menu_button: '//td[contains(text(), "${kategori_name}")]/following-sibling::td/button',
        kategori_hapus_action_menu_button: '//td[contains(text(), "${kategori_name}")]/following-sibling::td/div/div/button',
        kategori_hapus_modal: '//header[contains(text(), "hapus")]',
        kategori_hapus_modal_delete_button: '//button[contains(text(), "Delete")]',
        kategori_deleted_successfully_text_head: '//*[contains(text(), "success")]',
        kategori_deleted_successfully_text_body: '//*[contains(text(), "item dihapus")]'
    }
}
