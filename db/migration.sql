-- \c VIDIA_database

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS specs CASCADE;
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price NUMERIC,
    description TEXT
);

CREATE TABLE specs (
    spec_id SERIAL PRIMARY KEY,
    product_id INT,
    FOREIGN KEY(product_id) REFERENCES products(product_id),
    vidia_cuda_cores INT,
    boost_clock NUMERIC,
    base_clock NUMERIC,
    standard_memory_config VARCHAR,
    memory_interface VARCHAR,
    ray_tracing_cores VARCHAR,
    tensor_cores VARCHAR,
    vidia_architecture VARCHAR,
    vidia_dlss INT,
    vidia_reflex BOOLEAN,
    vidia_broadcast BOOLEAN,
    pci_express_gen_4 BOOLEAN,
    resizeable_bar BOOLEAN,
    vidia_geforce_experience BOOLEAN,
    vidia_ansel BOOLEAN,
    vidia_freestyle BOOLEAN,
    vidia_shadowplay BOOLEAN,
    vidia_highlights BOOLEAN,
    vidia_gsync BOOLEAN,
    game_ready_drivers BOOLEAN,
    vidia_studio_drivers BOOLEAN,
    vidia_omniverse BOOLEAN,
    directx_12_ultimate BOOLEAN,
    vidia_gpu_boost BOOLEAN,
    vlink BOOLEAN,
    vulkan BOOLEAN,
    vidia_encoder VARCHAR,
    vidia_decoder VARCHAR,
    av1_encode BOOLEAN,
    av1_decode BOOLEAN,
    cuda_capabilities NUMERIC,
    vr_ready BOOLEAN,
    maximum_resolution VARCHAR,
    standard_display_connectors VARCHAR,
    multimonitor VARCHAR,
    hdcp NUMERIC,
    length VARCHAR,
    width VARCHAR,
    slots VARCHAR,
    maximum_gpu_temp INT,
    idle_power INT,
    video_playback_power INT,
    average_gaming_power INT,
    total_graphics_power INT,
    required_system_power INT,
    supplementary_power_connector VARCHAR
);


