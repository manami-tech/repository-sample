package com.example.demo;

// 新規登録のリクエスト
public class ItemRequest {
    private String name;
    private String description;

    public ItemRequest() {
    }

    public ItemRequest(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
