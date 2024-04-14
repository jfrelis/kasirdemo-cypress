module.exports = {
    data_test_id: {
        produk_page_heading_title_text: '//a[contains(text(), "dashboard")]',
        produk_page_heading_sub_title_text: '//a[@href="/products"]',
        tambah_button: '//a[contains(text(), "tambah")]',
        tambah_produk_page_heading_sub_title_text: '//*[contains(text(), " / baru")]',
        kode_produk_input: '//*[@id="kode"]',
        nama_produk_input: '//*[@id="nama"]',
        deskripsi_produk_input: '//*[@id="deskripsi"]',
        harga_beli_input: '//*[@id="harga beli"]',
        harga_jual_input: '//*[@id="harga jual"]',
        stok_input: '//*[@id="stok"]',
        kategori_input: '//*[@id="kategori"]',
        kategori_option_modal: '//header[contains(text(), "kategori")]',
        kategori_option_value: '//td[contains(text(), "${category}")]',
        simpan_button: '//button[contains(text(), "simpan")]',
        produk_created_successfully_text_head: '//*[contains(text(), "success")]',
        produk_created_successfully_text_body: '//*[contains(text(), "item ditambahkan")]',
        produk_action_menu_button: '//td[contains(text(), "${product_name}")]/following-sibling::td/button',
        produk_hapus_action_menu_button: '//td[contains(text(), "${product_name}")]/following-sibling::td/div/div/button',
        produk_hapus_modal: '//header[contains(text(), "hapus")]',
        produk_hapus_modal_delete_button: '//button[contains(text(), "Delete")]',
        produk_deleted_successfully_text_head: '//*[contains(text(), "success")]',
        produk_deleted_successfully_text_body: '//*[contains(text(), "item dihapus")]'
    }
}
