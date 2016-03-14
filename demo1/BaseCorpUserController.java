package com.h2.flow.web;

import org.springframework.beans.factory.annotation.Autowired;

import com.h2.common.web.BaseController;
import com.h2.corp.entity.Corp;
import com.h2.corp.service.CorpService;

public class BaseCorpUserController extends BaseController {

	@Autowired
	protected CorpService corpService;

	protected boolean isSelfData(Integer corpId) {
		Corp corp = corpService.get(corpId);
		if (getCurUser().getId().equals(corp.getUser().getId())) {
			return true;
		}
		return false;
	}
}
