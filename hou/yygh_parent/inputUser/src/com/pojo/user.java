package com.pojo;


public class user {
    private int id;
    private String name;
    private String cardid;
    private String phone;

    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cardid='" + cardid + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

    public user() {
    }

    public user(int id, String name, String cardid, String phone) {
        this.id = id;
        this.name = name;
        this.cardid = cardid;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardid() {
        return cardid;
    }

    public void setCardid(String cardid) {
        this.cardid = cardid;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

